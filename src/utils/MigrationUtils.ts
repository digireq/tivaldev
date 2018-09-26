// tslint:disable-next-line
const faker = require('faker');
import { db } from 'src';
import { ProjectModel } from '../models/Project/ProjectModel';
import data from 'src/database';
import { CategoryModel } from 'src/models/Category/CategoryModel';
import { firestore } from 'firebase';
import { SubCategoryModel } from 'src/models/SubCategory/SubCategoryModel';
import { OptionModel } from 'src/models/Option/OptionModel';

export const GenerateFakeDb = async () => {

  // console.log(faker.commerce.productName(), null, faker.commerce.product());

  data.projects.forEach(async xProject => {

    const project = new ProjectModel("projects/demoprojektet");
    project.name = "DemoProjektet 2018";
    project.deadline = firestore.Timestamp.fromDate(new Date("2018-12-24"))
    const projectRef = await project.create();

    xProject.categories.forEach(async xCategory => {
      const categoryName = faker.commerce.department();
      const category = new CategoryModel(`${projectRef}/categories/${categoryName}`);
      category.name = categoryName;
      const categoryRef = await category.create();

      xCategory.subCategories.forEach(async xSub => {
        const subName = faker.random.word();
        const subCat = new SubCategoryModel(`${categoryRef}/subcategories/${subName}`);
        subCat.name = subName;
        const subCatRef = await subCat.create();

        xSub.options.forEach(xOption => {
          const optionName = faker.commerce.product();
          const option = new OptionModel(`${subCatRef}/options/${optionName}`);
          option.name = optionName;
          option.price = faker.commerce.price();
          option.create();
        })
      });
    })
  });
}