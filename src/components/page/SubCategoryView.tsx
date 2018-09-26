import * as React from 'react';
import { Title } from 'src/components/layout/Title';
import { ISubCategory } from 'src/models/SubCategory/ISubCategory';
import { NavLink } from 'react-router-dom';
import { RouteParamsType } from 'src/routes';
import { SubCategoryModel } from 'src/models/SubCategory/SubCategoryModel';
import { IOption } from 'src/models/Option/IOption';

interface IProps {
  match: {
    params: RouteParamsType
  }
}

interface IState {
  subCategory: ISubCategory,
  loading: boolean;
  options: IOption[];
}

export default class SubCategoryView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      subCategory: { name: "" },
      loading: true,
      options: [],
    }
  }

  async componentDidMount() {
    const subCategory = new SubCategoryModel(`projects/demoprojektet/categories/${this.props.match.params.catId}/subcategories/${this.props.match.params.subCatId}`);

    this.setState({
      subCategory: await subCategory.get(),
      options: await subCategory.getOptions(),
      loading: false
    });
  }

  render() {
    const { loading, subCategory, options } = this.state;
    const { params } = this.props.match;

    return (
      <React.Fragment>

        {subCategory.name && <Title title={` - ${subCategory.name}`} />}
        <h1>Welcome to {subCategory.name}</h1>

        {loading && (<small>loading</small>)}

        {!loading && (
          <React.Fragment>
            <small>playing jurrasic park theme song...</small>

            <hr />

            {options.length > 0 && (
              <React.Fragment>
                <h2>Options:</h2>
                <ul>
                  {options.map(option => (
                    <li key={option.name}><NavLink to={`${params.subCatId}/option/${option.name}`}>{option.name}</NavLink> ({option.price} KR)</li> 
                  ))}
                </ul>
              </React.Fragment>
            )}

          </React.Fragment>
        )}

      </React.Fragment >
    )
  }
}