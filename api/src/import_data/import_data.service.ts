import { Injectable } from '@nestjs/common';
import { OperationsService } from "../operations/operations.service";
import * as fs from "fs";
import { parse } from "csv";
import { Operation } from "../operations/operations.entity";
import { UserService } from "../user/user.service";
import { User } from "../user/user.entity";

@Injectable()
export class ImportDataService {

  constructor(private operationService: OperationsService,
              private userService: UserService) {}

  async readCsvFile(filePath: string): Promise<any[]> {
    const operationService = this.operationService; // Store the reference to the operationService
    const userService = this.userService; // Store the reference to the userService

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(parse({ delimiter: ";", from_line: 2 }))
        .on("data", async function (row) {

          let user: User = await userService.findByAccountNum(row[7]);
          let operation = {} as Operation;
          operation.user = user;
          operation.dateOp = row[0];
          operation.label = row[2];
          operation.category = row[4];
          operation.amount = parseInt(row[5]);
          return await operationService.add(operation);

        })
        .on("end", function () {
          console.log("finished");
          return "finished";
        })
        .on("error", function (error) {
          console.log(error.message);
          return error.message;
        });
    });
  }
}
