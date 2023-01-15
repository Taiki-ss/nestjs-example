import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {
  @Get('list')
  getList() {
    return [{ title: 'NestJSを学ぶ', due_on: '2023-1-15', done: false }];
  }
}
