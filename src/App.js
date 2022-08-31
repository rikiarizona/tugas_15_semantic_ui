import React, { Component } from 'react';
import { Container, Table, Search, Label, Menu, Grid, Feed, Icon, Comment, Form, Button, Header } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <Container>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Search placeholder='Search...' />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Header>
              <Table.Row textAlign='center'>
                <Table.HeaderCell>Name Document</Table.HeaderCell>
                <Table.HeaderCell>Jenis File</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell positive>
                  <Label ribbon>Panduan Belajar Javascript</Label>
                </Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar CSS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Panduan Belajar React JS</Table.Cell>
                <Table.Cell textAlign='center'>PDF</Table.Cell>
              </Table.Row>
            </Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan='2' textAlign='right'>
                  <Menu pagination>
                    <Menu.Item as='a' icon='chevron left' />
                    <Menu.Item as='a' name='1' />
                    <Menu.Item as='a' name='2' />
                    <Menu.Item as='a' name='3' />
                    <Menu.Item as='a' name='4' />
                    <Menu.Item as='a' icon='chevron right' />
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
          <br />
          <Grid>
            <Grid.Column width={6}>
              <Comment.Group threaded>
                <Header as='h3' dividing>
                  Commentar
                </Header>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Satria</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:42PM</span>
                    </Comment.Metadata>
                    <Comment.Text>Hallo..!</Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Danang</Comment.Author>
                    <Comment.Metadata>
                      <span>Today at 5:50AM</span>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>Kerjakan Sesuatu Semampu Kamu...</p>
                    </Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>

                  <Comment.Group>
                    <Comment>
                      <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
                      <Comment.Content>
                        <Comment.Author as='a'>Ricky</Comment.Author>
                        <Comment.Metadata>
                          <span>Just now</span>
                        </Comment.Metadata>
                        <Comment.Text>Kmu Sekarang Dimana Danang?</Comment.Text>
                        <Comment.Actions>
                          <a>Reply</a>
                        </Comment.Actions>
                      </Comment.Content>
                    </Comment>
                  </Comment.Group>
                </Comment>

                <Comment>
                  <Comment.Avatar as='a' src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' />
                  <Comment.Content>
                    <Comment.Author as='a'>Joe</Comment.Author>
                    <Comment.Metadata>
                      <span>1 days ago</span>
                    </Comment.Metadata>
                    <Comment.Text>Terimakasih Atas Nasihat Nya</Comment.Text>
                    <Comment.Actions>
                      <a>Reply</a>
                    </Comment.Actions>
                  </Comment.Content>
                </Comment>

                <Form reply>
                  <Form.TextArea />
                  <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                </Form>
              </Comment.Group>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Feed size='large'>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> added you as a friend
                      <Feed.Date>1 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 4 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label icon='pencil' />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page
                    </Feed.Summary>
                    <Feed.Date>3 days ago</Feed.Date>
                    <Feed.Extra text>
                      Saya Senang Belajar Bahasa Pemograman
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 11 Likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
                <Feed.Event>
                  <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/helen.jpg' />
                  <Feed.Content>
                    <Feed.Date>4 Days Ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 new Image
                    </Feed.Summary>
                    <Feed.Extra images>
                      <a>
                        <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                      </a>
                      <a>
                        <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                      </a>
                    </Feed.Extra>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name='like' /> 1 Like
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App;