import { Controller, Post, Req, UploadedFile, UseInterceptors } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from 'multer';
import { extname } from "path";
import { OperationsService } from "../operations/operations.service";
import { ImportDataService } from "./import_data.service";

@Controller('api/import')
export class ImportDataController {

  constructor(private importDataService: ImportDataService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './datas',
        filename: (req, file, callback) => {
          const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
          const extension = extname(file.originalname);
          req.filename = `${uniqueSuffix}${extension}`; // Store the filename in the request object
          callback(null, req.filename);
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file, @Req() req) {
    // Handle the uploaded file here
    console.log(file);
    return this.importDataService.readCsvFile(`./datas/${req.filename}`);
  }
}
