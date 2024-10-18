import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from '../entities/book.entity';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  create(@Body() book: Book): Promise<Book> {
    return this.booksService.create(book);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() book: Partial<Book>,
  ): Promise<Book> {
    return this.booksService.update(id, book);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}
