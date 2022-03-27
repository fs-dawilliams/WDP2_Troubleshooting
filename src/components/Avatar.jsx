import React from 'react'

const Avatar = props => {
    return (
        <img src={props.AvatarIcon} alt={props.AvatarAlt} style={styles.avatar} />
    )
}

export default Avatar;

const styles = {
    avatar: {
        height: '32px',
        cursor: 'pointer',
        borderRadius: '50%'
    }
}