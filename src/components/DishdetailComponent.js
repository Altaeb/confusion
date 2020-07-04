import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList, StyleSheet, Modal, Button } from 'react-native';
import { Card, Icon, Input, Rating } from 'react-native-elements';
import { connect } from 'react-redux';

import { baseUrl } from '../shared/baseUrl';
import { postFavorite, postComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        favorites: state.favorites
    }
}

const mapDispatchToProps = dispatch => ({
    postFavorite: dishId => dispatch(postFavorite(dishId)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment))
});

const RenderDish = props => {
    const { dish, toggleModal } = props;

    if (dish != null) {
        return (
            <Card
                featuredTitle={dish.name}
                image={{ uri: baseUrl + dish.image }}
            >
                <Text style={{ margin: 10 }}>{dish.description}</Text>
                <View style={styles.formRow}>
                    <Icon
                        raised
                        reverse
                        name={props.favorite ? 'heart' : 'heart-o'}
                        type='font-awesome'
                        color='#f50'
                        onPress={() => props.favorite ? console.log('Already marked') : props.onPress()} />
                    <Icon
                        raised
                        reverse
                        name='pencil'
                        type='font-awesome'
                        color='#f50'
                        onPress={toggleModal} />
                </View>
            </Card>
        )
    } else {
        return <View></View>
    }
}

const RenderComments = props => {
    const commentList = props.comment;

    const renderCommentList = ({ item, index }) => {
        return (
            <View key={index} style={{ margin: 10 }}>
                <Text style={{ fontSize: 14 }}>{item.comment}</Text>
                <Text style={{ fontSize: 12 }}>{item.rating} Stars</Text>
                <Text style={{ fontSize: 12 }}>{'-- ' + item.author + ', ' + item.date} </Text>
            </View>
        )
    };

    return (
        <Card title='Comments' style={{ flex: 1, marginBottom: 25 }}>
            <FlatList
                data={commentList}
                renderItem={renderCommentList}
                keyExtractor={item => item.id.toString()}
            />
        </Card>
    )
}

const DishDetail = props => {
    const dishId = props.navigation.getParam('dishId', '');
    const dishID = JSON.stringify(dishId);

    const [showModal, setModalVisibility] = useState(false);
    const toggleModal = () => setModalVisibility(!showModal);
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState('');

    const ratingCompleted = rating => {
        setRating(rating);
    }

    const handleSubmit = () => {
        props.postComment(dishId, rating, author, comment);
    };
    const markFavorite = dishId => {
        props.postFavorite(dishId);
    }

    return (
        <ScrollView>
            <RenderDish dish={props.dishes.dishes[dishID]} favorite={props.favorites.some(el => el === dishId)}
                onPress={() => markFavorite(dishId)} toggleModal={toggleModal} />
            <RenderComments comment={props.comments.comments.filter(comment => comment.dishId === dishId)} />
            <Modal
                animationType="slide"
                transparent={false}
                visible={showModal}
                onDismiss={toggleModal}
                onRequestClose={toggleModal}
            >
                <View style={styles.modal}>
                    <Text style={styles.modalTitle}>Add Comment</Text>
                    <Rating showRating onFinishRating={ratingCompleted} fractions={1} startingValue={0} />
                    <Input
                        placeholder='Author'
                        value={author}
                        autoFocus={true}
                        leftIcon={{ type: 'font-awesome', name: 'user-o' }}
                        onChangeText={text => setAuthor(text)}
                    />
                    <Input
                        placeholder='Comment'
                        value={comment}
                        leftIcon={{ type: 'font-awesome', name: 'comment-o' }}
                        onChangeText={text => setComment(text)}
                    />
                    <View style={{ marginBottom: 10 }}>
                        <Button
                            onPress={handleSubmit}
                            color="#663399"
                            title="Submit"
                        />
                    </View>
                    <View>
                        <Button
                            onPress={toggleModal}
                            color="#808080"
                            title="Cancel"
                        />
                    </View>
                </View>
            </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    formRow: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        margin: 20
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: '#512DA8',
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(DishDetail);