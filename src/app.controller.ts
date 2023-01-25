import { Get, Controller, Render, Post, Body, Param } from '@nestjs/common';
@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Post('/submit')
  submitForm(@Body('id') id: string, @Body('pw') pw: string) {
    console.log('id, pw', id, pw);
    if (!id || !pw) {
      return {
        result: false,
        message: '아이디와 비밀번호를 입력 해 주세요.',
      };
    }
    return {
      result: true,
      user: { id: id, name: '진주', age: 20, nickName: 'dindoo' },
    };
  }

  @Get('/info/:id')
  @Render('info')
  info(@Param('id') id: string) {
    return { user: { id: id, name: '진주', age: 20, nickname: 'dindoo' } };
  }
}
