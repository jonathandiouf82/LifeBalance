import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";

@Controller('powens')
export class PowensController {
  @Get("/test")
  test(@Query('code') code: string): String {
    console.log(code);
    return code;
  }

  @Post('/user')
  user(@Body()user: any): number {
    return user.id;
  }

}
