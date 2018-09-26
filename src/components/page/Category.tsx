import * as React from 'react';
import { ICategory } from 'src/models/Category/ICategory';
import { ProjectModel } from 'src/models/Project/ProjectModel';
import { CategoryModel } from '../../models/Category/CategoryModel';
import { Title } from 'src/components/layout/Title';
import { ISubCategory } from '../../models/SubCategory/ISubCategory';
import { NavLink } from 'react-router-dom';
import { RouteParams } from 'src/routes';

interface IProps {
  match: any;
}

interface IState {
  category: ICategory,
  loading: boolean;
  subCategories: ISubCategory[];
}

export default class Category extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      category: { name: "" },
      loading: true,
      subCategories: [],
    }
  }

  async componentDidMount() {
    const category = new CategoryModel(`projects/demoprojektet/categories/${this.props.match.params.catId}`);

    this.setState({ 
      category: await category.get(), 
      subCategories: await category.subCategories.get(), 
      loading: false 
    });
  }

  render() {
    const { loading, category, subCategories } = this.state;
    const { params } = this.props.match;
    console.log(params);
    return (
      <React.Fragment>

        {category.name && <Title title={` - ${category.name}`} />}
        <h1>Welcome to {category.name}</h1>

        {loading && (<small>loading</small>)}

        {!loading && (
          <React.Fragment>
            <small>playing jurrasic park theme song...</small>

            <hr />

            {subCategories.length > 0 && (
              <ul>
                {subCategories.map(subCategory => (
                  <li key={subCategory.name}><NavLink to={`${params[RouteParams.catId]}/subcategory/${subCategory.name}`}>{subCategory.name}</NavLink></li>
                ))}
              </ul>
            )}

          </React.Fragment>
        )}

      </React.Fragment >
    )
  }
}