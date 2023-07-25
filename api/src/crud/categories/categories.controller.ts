import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ApiTags} from "@nestjs/swagger";
import {CategoriesService} from "./categories.service";
import {Category} from "./category.entity";
import {DeleteResult, UpdateResult} from "typeorm";

@ApiTags('categories')
@Controller('crud/categories')
export class CategoriesController {

    constructor(private categoryService: CategoriesService) {}

    @Get("/getAll")
    findAll(): Promise<Category[]> {
        return this.categoryService.findAll();
    }

    @Get("/:id")
    findById(@Param() params: any): Promise<Category> {
        return this.categoryService.findById(params.id);
    }

    @Post("add")
    add(@Body() category: Category): Promise<Category> {
        return this.categoryService.add(category);
    }

    @Put("/:id")
    update(@Param() params: any, @Body() category: Category): Promise<UpdateResult> {
        return this.categoryService.update(params.id, category);
    }

    @Delete("/:id")
    delete(@Param() params: any): Promise<DeleteResult> {
        return this.categoryService.delete(params.id);
    }
}
