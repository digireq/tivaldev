import * as React from 'react';
import { Title } from 'src/layout-components/Title';
import { getAllCategories } from 'src/utils/WebApiUtils';
import { ICategory } from '../types/ICategory';
import { NavLink } from 'react-router-dom';


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
    this.setState({ categories: await getAllCategories(), loading: false });
  }

  render() {

    const { categories, loading } = this.state;
    console.log(categories);
    return (
      <React.Fragment>
        <Title title=" - Kategorier" />

        {loading && <p>loading</p>}

        {categories.length > 0 && (
          <ul>
            {categories.map(category => (
              <li key={category.id}><NavLink to={`/category/${category.id}`}>{category.name}</NavLink></li>
            ))}
          </ul>
        )}
      </React.Fragment >
    )
  }
}