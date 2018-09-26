import Home from 'src/components/page/Home';
import Contact from 'src/components/page/Contact';
import Categories from 'src/components/page/Categories';
import Category from 'src/components/page/Category';

type Route = {
  path: string;
  exact: boolean;
  component: any;
}

export const RouteParams = {
  catId: 'catId',
  subCatId: 'subCatId',
  optionId: 'optionId'
}

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
  {
    path: `/category/:${RouteParams.catId}/subcategories`, 
    exact: true,
    component: Category
  } as Route,
  {
    path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}`, 
    exact: true,
    component: Category
  } as Route,
  {
    path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}/options`, 
    exact: true,
    component: Category
  } as Route,
  {
    path: `/category/:${RouteParams.catId}/subcategory/:${RouteParams.subCatId}/option/:${RouteParams.optionId}`, 
    exact: true,
    component: Category
  } as Route
];