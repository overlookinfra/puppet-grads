import React, { Component } from 'react';
import './App.css';
import {
  Button,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  Message,
  List,
  Card,
  Segment,
  Responsive,
} from 'semantic-ui-react';

class App extends Component {
  render() {
    const imagePath = process.env.PUBLIC_URL + '/assets/'
    return (
      <div className="App">
        <Grid stackable container style={{ 'text-align': 'left', padding: '5em 0em' }}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1" dividing>Welcome to Puppet</Header>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={2}>
            <Grid.Column width={6}>
              <Card fluid>
                <Segment.Group>
                  <Responsive as={Segment} {...Responsive.onlyMobile}>
                    <Image src={`${imagePath}collage-small.jpg`} />
                  </Responsive>
                  <Responsive as={Segment} {...Responsive.onlyTablet}>
                    <Image src={`${imagePath}collage-small.jpg`} />
                  </Responsive>
                  <Responsive as={Segment} {...Responsive.onlyComputer}>
                    <Image src={`${imagePath}collage.jpg`} />
                  </Responsive>
                </Segment.Group>
                <Card.Content textAlign="center">
                  <Card.Header>We think you'll like what you see.</Card.Header>

                  <Divider />

                  <Button.Group>
                    <Button color="facebook" as="a" href="https://www.facebook.com/PuppetBelfast/">
                      <Icon name="facebook" />
                      {' '}
                      facebook
                    </Button>
                    <Button color="twitter" as="a" href="https://twitter.com/puppetbelfast">
                      <Icon name="twitter" />
                      {' '}
                      twitter
                    </Button>
                  </Button.Group>
                </Card.Content>
              </Card>
            </Grid.Column>


            <Grid.Column width={10}>
              <p>
                If you like challenges and want to apply to one of the leading automation companies in the world, then look no further!
              </p>
              <Message info>
                <Message.Header>
                  Technologies
                </Message.Header>

                <p>
                  At Puppet, you’ll gain experience with a wide range of technologies:
                </p>

                <List bulleted>
                  <List.Item>Cloud/Containers (Docker, AWS, GCP, Azure, OpenStack, Kubernetes)</List.Item>
                  <List.Item>Javascript (Ember.js, React.js)</List.Item>
                  <List.Item>Backend Languages (Go, Clojure)</List.Item>
                  <List.Item>Databases (PostgreSQL, GraphQL)</List.Item>
                  <List.Item>Automated testing (Ruby, Selenium, Nightwatch)</List.Item>
                  <List.Item>DevOps and Configuration Management </List.Item>
                </List>
              </Message>

              <p>
                We are also an Open Source company and working with us is an excellent way to get your name out in the Open Source community.
              </p>

              <Message info>
                <Message.Header>
                  Fun
                </Message.Header>

                <p>
                  We aren’t just about the work; we like to play too! Our main headquarters is in Portland, Oregon, with the Belfast office being the second biggest in the world. It's fantastic to work here - with a city centre office location; we get up to all sorts of fun activities:
                </p>

                <List bulleted>
                  <List.Item>Free lunch once a week</List.Item>
                  <List.Item>Breakfast baps on Fridays</List.Item>
                  <List.Item>Fruit, snacks</List.Item>
                  <List.Item>Free beer (with beer tastings to choose the next batch)</List.Item>
                  <List.Item>Lego, games consoles, board games</List.Item>
                  <List.Item>A state-of-the-art coffee machine</List.Item>
                  <List.Item>
                    Most importantly -
                      Pop by at our booth, say the password 'Miku' to get special freebies.
                  </List.Item>
                </List>
              </Message>

              <p>
                At Puppet you aren't just put in the corner and expected to make Tea for the senior engineers. As a Grad/Intern you'll be placed in a team with other engineers and treated as a peer.
                <br />
                <br />
                You'll work on real projects - it's hard work, but if you fancy the challenge we'd like to hear from you!
              </p>

              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    Puppet Open Doors
                  </Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Date TBC
                    </span>
                  </Card.Meta>
                  <Card.Description>
                  We are holding a Meetup for both Graduates and Interns to get a feel for Puppet and to experience how we work here. Eat pizza, drink beer (including non-alcoholic drinks), and more importantly, have fun! There are plenty of fellow engineers around for a chat, and we do not believe in stupid questions here :) If you are currently studying Computer Science or Software Engineering and are interested in the Graduate/Intern positions, join us for a night of exciting activities! Click Register Now!
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Icon name="map" />
                  <a href="https://goo.gl/maps/7tUVkcgEHLA2">4th Floor, 40 Linenhall Street, BT2 8BA</a>
                </Card.Content>
                <Card.Content extra>
                  <Grid columns={2}>
                    <Grid.Column>
                      <Button disabled color="yellow" as="a" href="">
                        Register Now!
                      </Button>
                    </Grid.Column>

                    <Grid.Column textAlign="right">
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>

              <p>
                But wait, there's more!
              </p>

              <Card fluid>
                <Card.Content>
                  <Card.Header>
                    Puppet Pups
                  </Card.Header>
                  <Card.Meta>
                    Puppet is a dog friendly office. Miku is in most days, but the others come in too from time to time.
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Grid columns={3} divided style={{ textAlign: "center" }}>
                    <Grid.Row>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}miku_needs_you.jpg`} size="small" />
                      </Grid.Column>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}rosie.jpg`} size="small" />
                      </Grid.Column>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}poppy.jpg`} size="small" />
                      </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}betty.jpg`} size="small" />
                      </Grid.Column>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}kula.jpg`} size="small" />
                      </Grid.Column>
                      <Grid.Column>
                        <Image shape="rounded" src={`${imagePath}darwin.jpg`} size="small" />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
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
