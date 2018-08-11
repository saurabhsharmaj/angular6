import { CommonServiceModule } from './common-service.module';

describe('CommonServiceModule', () => {
  let commonServiceModule: CommonServiceModule;

  beforeEach(() => {
    commonServiceModule = new CommonServiceModule();
  });

  it('should create an instance', () => {
    expect(commonServiceModule).toBeTruthy();
  });
});
