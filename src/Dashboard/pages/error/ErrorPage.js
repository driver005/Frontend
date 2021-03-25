import React from 'react';
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';



class ErrorPage extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <div>
            <h1>404</h1>
            <p>
              Opps, it seems that this page does not exist here.
            </p>
            <p>
              If you are sure it should, please search for it:
            </p>
            <Form method="get">
              <FormGroup>
                <Input className="input-no-border" type="text" placeholder="Search Pages" />
              </FormGroup>
              <Link to="app/extra/search">
                <Button type="submit" color="inverse">
                  Search <i className="fa fa-search text-secondary ml-xs" />
                </Button>
              </Link>
            </Form>
          </div>
          <footer>
            2020 &copy; Light Blue Template - React Admin Dashboard Template.
          </footer>
        </Container>
      </div>
    );
  }
}

export default ErrorPage;
