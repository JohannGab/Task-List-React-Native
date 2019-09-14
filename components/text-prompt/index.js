import React from 'react';
import Prompt from 'rn-prompt';

const TextPrompt = ({isVisible, onCancelCallBack, onSubmitCallBack, title, placeHolder, ValueDefaut }) => (
<Prompt
    title={title}
    placeholder={placeHolder}
    defaultValue={ValueDefaut}
    visible={ isVisible }
    onCancel={ () => onCancelCallBack() }
    onSubmit={value => onSubmitCallBack(value)}
    />

)

export default TextPrompt;