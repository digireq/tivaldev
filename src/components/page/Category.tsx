import * as React from 'react';
import { getCategory } from 'src/utils/WebApiUtils';
import { CategoryModel } from 'src/models/Category/CategoryModel';
// import { ICategory } from 'src/models/Category/ICategory';
import { Title } from 'src/components/layout/Title';

interface IProps {
  match: any;
}

interface IState {
  // category: ICategory,
  loading: boolean;
}

export default class Category extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      // category: { name: "" },
      loading: true
    }

  }

  async componentDidMount() {
    // const category = new CategoryModel(await getCategory(this.props.match.params.id));

    // this.setState({ category, loading: false });
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        {/* {category.name && <Title title={` - ${category.name}`} />}
        <h1>Welcome to {category.name}</h1> */}

        {loading && (<small>loading</small>)}
        {!loading && (<small>playing jurrasic park theme song...</small>)}
      </React.Fragment >
    )
  }
}