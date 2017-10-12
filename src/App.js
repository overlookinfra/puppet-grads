import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Button,
  Divider,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  Label,
  Menu,
  Message,
  Segment,
  Popup,
  Table,
  List,
  Card
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid stackable container style={{ 'text-align': 'left', padding: '5em 0em' }}>
          <Grid.Row>
            <Grid.Column>
            <Header as='h1' dividing>Welcome to Puppet</Header>
            </Grid.Column>
          </Grid.Row>
          
          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Card fluid>
                <Image src='https://s3-eu-west-1.amazonaws.com/puppetbelfastgradandintern/collage.jpg' />
                <Card.Content>
                  <Card.Header>We think you'll like what you see.</Card.Header>
                </Card.Content>
              </Card>
            </Grid.Column>
            
            <Grid.Column width={10}>
                <p>
                  If you like a challenge and want to apply to a kickass organisation that is one of the leading automation companies in the world, then look no further!
                </p>
              <Message info>
                <Message.Header>
                  Technologies
                </Message.Header>
                
                <p>
                  At Puppet, you’ll gain experience with a wide range of technologies:
                </p>
                
                <List bulleted>
                  <List.Item>Cloud/Containers (Docker, AWS, Azure, OpenStack)</List.Item>
                  <List.Item>Javascript (Ember.js, React.js)</List.Item>
                  <List.Item>Backend Languages (Go, Clojure)</List.Item>
                  <List.Item>Databases (PostgreSQL)</List.Item>
                  <List.Item>Automated testing (Ruby, Selenium)</List.Item>
                  <List.Item>DevOps and Configuration Management </List.Item>
                </List>
              </Message>
                
              <p>
                We are also an Open Source company and working with us is a good way to get your name out in the Open Source community.
              </p>
                
              <Message info>
                <Message.Header>
                  Fun
                </Message.Header>
                
                <p>
                  We aren’t just about the work, we also like to have fun too. Our main headquarters is in Portland, Oregon, with the Belfast office the second biggest in the world. It's awesome to work here - wth a city centre office location, we get up to all sorts of fun activities:
                </p>
                
                <List bulleted>
                  <List.Item>Free lunch once a week</List.Item>
                  <List.Item>Breakfast baps on Fridays</List.Item>
                  <List.Item>Fruit, snacks</List.Item>
                  <List.Item>Free beer (with beer tastings to choose the next batch)</List.Item>
                  <List.Item>Lego, games consoles, boardgames</List.Item>
                  <List.Item>A state-of-the-art coffee machine</List.Item>
                  <List.Item>and most importantly - <Popup trigger={<Label color='yellow'>Miku</Label>}><Image src='https://s3-eu-west-1.amazonaws.com/puppetbelfastgradandintern/collage.jpg' /></Popup>, our resident four-legged employee!</List.Item> 
                </List>
              </Message>

              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    Puppet Open Doors
                  </Card.Header>
                  <Card.Meta>
                    <span className='date'>
                      26th October @ 6pm
                    </span>
                  </Card.Meta>
                  <Card.Description>
                    As we are hiring for both Graduates and Interns, to get a feel for Puppet and what it's like to work here we are holding a Meetup. Pizza shall be eaten, beer (and non-alcoholic drinks) shall be drank, much fun shall be had. There will be plenty of fellow engineers around to grab for a chat, we do not believe in stupid questions here :) If you want to join us for a night of thrilling activities, also if you are interested in the Graduate/Intern positions and are currently studying Computer Science or Software Engineering, click the button below to register.
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name='map' />
                  4th Floor, 40 Linenhall Street, BT2 8BA
                </Card.Content>
                <Card.Content extra>
                  <div className='ui one buttons'>
                    <a href="https://puppet3.typeform.com/to/t2F0lJ">
                      <Button primary>
                        Register Now!
                      </Button>
                    </a>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
