import * as React from 'react';
import { RouteParamsType } from 'src/routes';
import { OptionModel } from 'src/models/Option/OptionModel';
import { IOption } from 'src/models/Option/IOption';
import { Title } from 'src/components/layout/Title';

interface IProps {
  match: {
    params: RouteParamsType
  }
}

interface IState {
  option: IOption,
  loading: boolean;
}

export default class OptionView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      option: { name: '', price: 0 },
      loading: true,
    }
  }

  async componentDidMount() {
    const { catId, subCatId, optionId } = this.props.match.params;
    const option = new OptionModel(`projects/demoprojektet/categories/${catId}/subcategories/${subCatId}/options/${optionId}`);

    this.setState({
      option: await option.get(),
      loading: false
    });
  }

  render() {
    const { loading, option } = this.state;
    return (
      <React.Fragment>

        {option.name && <Title title={` - ${option.name}`} />}
        <h1>Welcome to {option.name}</h1>

        {loading && (<small>loading</small>)}

        {!loading && (
          <React.Fragment>
            <small>playing jurrasic park theme song...</small>

            <hr />

            <h2>Info:</h2>
            <ul>
              <li>Name: {option.name}</li>
              <li>Price: {option.price}</li>
            </ul>
          </React.Fragment>
        )}

      </React.Fragment >
    )
  }
}