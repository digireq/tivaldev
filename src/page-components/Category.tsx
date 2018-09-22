import * as React from 'react';
import { Title } from 'src/layout-components/Title';
import { getAllCategories } from 'src/utils/WebApiUtils';
import { ICategory } from '../types/ICategory';
import { NavLink } from 'react-router-dom';

interface IProps {
  match: any;
}

export default class Category extends React.Component<IProps, {}> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      // categories: [],
      // loading: true
    }

    console.log(props);
  }

  async componentDidMount() {
    // this.setState({ categories: await getAllCategories(), loading: false });
  }

  render() {
    const { id } = this.props.match.params;
    // const { categories, loading } = this.state;
    // console.log(categories);
    return (
      <React.Fragment>
        <Title title={` - ${id}`} />
        <h1>Welcome to {id}</h1>
        <small>playing jurrasic park theme song...</small>
      </React.Fragment >
    )
  }
}