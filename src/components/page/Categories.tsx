import * as React from 'react';
import { getAllCategories } from 'src/utils/WebApiUtils';
import { NavLink } from 'react-router-dom';
import { Title } from 'src/components/layout/Title';
import { ICategory } from 'src/models/Category/ICategory';
import { ProjectModel } from '../../models/Project/ProjectModel';


interface IState {
  categories: ICategory[];
  loading: boolean;
}

export default class Categories extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      categories: [],
      loading: true
    }
  }

  async componentDidMount() {
    const p = new ProjectModel("projects/demoprojektet");
    const categories = await p.getCategories();
    this.setState({ categories, loading: false });
  }

  render() {

    const { loading, categories } = this.state;
    return (
      <React.Fragment>
        <Title title=" - Kategorier" />

        {loading && <p>loading</p>}


        {categories.length > 0 && (
          <React.Fragment>
            <h2>Categories: </h2>
            <ul>
              {categories.map(category => (
                <li key={category.name}><NavLink to={`/category/${category.name}`}>{category.name}</NavLink></li>
              ))}
            </ul>
          </React.Fragment>
        )}
      </React.Fragment >
    )
  }
}