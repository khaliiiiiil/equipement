import { Test, TestingModule } from '@nestjs/testing';
import { ElementController, GroupController } from './app.controller';
import { ElementService, GroupService } from './app.service';

describe('ElementController', () => {
  let elementController: ElementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ElementController],
      providers: [ElementService],
    }).compile();

    elementController = app.get<ElementController>(ElementController);
  });


});



describe('GroupController', () => {
  let groupController: GroupController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [GroupController],
      providers: [GroupService],
    }).compile();

    groupController = app.get<GroupController>(GroupController);
  });


});
