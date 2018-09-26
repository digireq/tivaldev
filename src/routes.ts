import Home from 'src/components/page/Home';
import Contact from 'src/components/page/Contact';
import Categories from 'src/components/page/Categories';
import Category from 'src/components/page/Category';
import SubCategoryView from './components/page/SubCategoryView';
import OptionView from './components/page/OptionView';

type Route = {
  path: string;
  exact: boolean;
  component: any;
}
export type RouteParamsType = {
  catId: string;
  subCatId: string;
  optionId: string;
}
const RouteParams = {
  catId: 'catId',
  subCatId: 'subCatId',
  optionId: 'optionId'
} as RouteParamsType

export const routes = [
  {
    path: '/', 
    exact: true,
    component: Home
  } as Route,
  {
    path: '/contact', 
    exact: true,
    component: Contact
  } as Route,
  {
    path: '/categories', 
    exact: true,
    component: Categories
  } as Route,
  {
    path: `/category/:${RouteParams.catId}`, 
    exact: true,
    component: Category
  } as Route,
  // {
  //   path: `/category/:${RouteParams.catId}/subcategories`, 
  //   exact: true,
  //   component: Category
  // } as Route,
  {
    path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}`, 
    exact: true,
    component: SubCategoryView
  } as Route,
  // {
  //   path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}/options`, 
  //   exact: true,
  //   component: SubCategory
  // } as Route,
  {
    path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}/option/:${RouteParams.optionId}`, 
    exact: true,
    component: OptionView
  } as Route
];