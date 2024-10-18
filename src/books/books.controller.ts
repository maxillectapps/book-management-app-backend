import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  BadRequestException,
} from "@nestjs/common";
import { BooksService } from "./books.service";
import { Book } from "../entities/book.entity";

@Controller("books")
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }

  @Post()
  async create(@Body() book: Book): Promise<Book> {
    // Check if the title is already taken
    const existingBook = await this.booksService.findByTitle(book.title);
    if (existingBook) {
      throw new BadRequestException(
        "Book title already exists. Please choose a unique title."
      );
    }

    // If no existing book is found, proceed to create a new book
    return this.booksService.create(book);
  }

  @Put(":id")
  update(
    @Param("id", ParseIntPipe) id: number,
    @Body() book: Partial<Book>
  ): Promise<Book> {
    return this.booksService.update(id, book);
  }

  @Delete(":id")
  remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
    return this.booksService.remove(id);
  }
}
