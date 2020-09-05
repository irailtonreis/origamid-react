import React from 'react'
import Button from './Button';
import Input from './Input';

export default function Form() {
    return (
        <div>
            <Input id="email" label="Email" />
            <Input id="senha" label="Senha" />
            <Button />
        </div>
    ) 
}
