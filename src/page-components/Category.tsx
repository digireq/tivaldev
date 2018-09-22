import * as React from 'react';
import { Title } from 'src/layout-components/Title';
import { getCategory } from 'src/utils/WebApiUtils';
import { ICategory } from '../types/ICategory';

interface IProps {
  match: any;
}

interface IState {
  category: ICategory,
  loading: boolean;
}

export default class Category extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      category: { name: "", id: "" },
      loading: true
    }

  }

  async componentDidMount() {
    this.setState({ category: await getCategory(this.props.match.params.id), loading: false });
  }

  render() {
    const { category, loading } = this.state;
    return (
      <React.Fragment>
        {category.name && <Title title={` - ${category.name}`} />}
        <h1>Welcome to {category.name}</h1>

        {loading && (<small>loading</small>)}
        {!loading && (<small>playing jurrasic park theme song...</small>)}
      </React.Fragment >
    )
  }
}