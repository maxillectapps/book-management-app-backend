import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Book } from "../entities/book.entity";

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly booksRepository: Repository<Book>
  ) {}

  // Method to find a book by title
  async findByTitle(title: string): Promise<Book | undefined> {
    return this.booksRepository.findOne({ where: { title } });
  }

  async findAll(): Promise<Book[]> {
    return this.booksRepository.find();
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.booksRepository.findOneBy({ id });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async create(book: Book): Promise<Book> {
    return this.booksRepository.save(book);
  }

  async update(id: number, book: Partial<Book>): Promise<Book> {
    await this.findOne(id);
    await this.booksRepository.update(id, book);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const book = await this.findOne(id);
    await this.booksRepository.remove(book);
  }
}
