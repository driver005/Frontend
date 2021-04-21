import React from 'react';
import {
  ListGroup,
  ListGroupItem,
  
  UncontrolledTooltip,
} from 'react-bootstrap';
import { Listgroup, Listgroupitem, Listgroupspan, H6, Progressspan, Progresscomponents, Strong } from '../../../styles/notifications';


class ProgressDemo extends React.Component {
  render() {
    return (
      <Listgroup className={['thin-scroll'].join(' ')}>
        <Listgroupitem >
          <Progressspan className="text-muted float-right">60%</Progressspan>
          <H6 className="m-0 mb-1">
            <Strong>Urgent:</Strong>
            &nbsp;Rails 4.1.0 upgrade
          </H6>
          <Progresscomponents className={['m-0'].join(' ')} color="primary" value="60" />
          <Progressspan className="help-block">3 notes added by James 2h ago...</Progressspan>
        </Listgroupitem>
        <Listgroupitem >
          <Progressspan className="text-muted float-right">100%</Progressspan>
          <H6 className="m-0 mb-1">
            <Strong>Urgent:</Strong>
            &nbsp;Rails 4.1.0 upgrade
          </H6>
          <Progresscomponents className={['m-0'].join(' ')} color="primary" value="100" />
          <Progressspan className="help-block">3 notes added by James 2h ago...</Progressspan>
        </Listgroupitem>
        {/*<ListGroupItem>
          <span className="text-muted float-right">83%</span>
          <h6 className="m-0 mb-1">
            <strong>Primary:</strong>
            &nbsp;Light Blue App
          </h6>
          <Progress className={['progress-sm', 'm-0'].join(' ')} color="success" value="83" />
          <span className="help-block">verifying stable probability status</span>
        </ListGroupItem>
        <ListGroupItem >
          <span className="text-muted float-right">44%</span>
          <h6 className="m-0 mb-1">
            <span className="circle bg-gray-dark text-warning" id="TooltipQuestion">
              <i className="fa fa-question" />
            </span>
            <UncontrolledTooltip placement="bottom" target="TooltipQuestion">
              2 issues require your attention
            </UncontrolledTooltip>
            &nbsp;
            Finish The Road to Hell Song
          </h6>
          <Progress className={['progress-sm', 'm-0'].join(' ')} color="gray-dark" value="44" />
          <span className="help-block">last update: 2h ago</span>
        </ListGroupItem>
        <ListGroupItem >
          <span className="text-muted float-right">86%</span>
          <h6 className="m-0 mb-1">
            Complete project planning
          </h6>
          <Progress className={['progress-xs', 'm-0'].join(' ')} color="danger" value="86" />
          <span className="help-block">no, no way this is not working...</span>
        </ListGroupItem>
        <ListGroupItem>
          <span className="text-muted float-right">100%</span>
          <h6 className="m-0 mb-1">
            <strong>Completed:</strong>
            &nbsp;Instruct newbies on coding standards
          </h6>
          <Progress className={['progress-xs', 'm-0'].join(' ')} color="primary" value="100" />
          <span className="help-block">last update: April 22, 2014 2:36 pm</span>
        </ListGroupItem> */}
      </Listgroup>
    );
  }
}

export default ProgressDemo;
