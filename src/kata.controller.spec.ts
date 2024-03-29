import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './kata.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  describe('step -- 1 ', () => {
    it('add "" should be 0', () => {
      expect(appController.add("")).toBe(0);
    });
  });
});