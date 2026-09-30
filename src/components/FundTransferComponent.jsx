import React, { useState } from 'react';
import axios from 'axios';

const FundTransferComponent = () => {

    const [fromAccount, setFromAccount] = useState('');
    const [toAccount, setToAccount] = useState('');
    const [amount, setAmount] = useState('');

    const [message, setMessage] = useState('');

    const [errors, setErrors] = useState({
        fromAccount: '',
        toAccount: '',
        amount: ''
    });

    async function transferMoney(e) {
        e.preventDefault();

        if (validateForm()) {

            const transferRequest = {
                fromAccount,
                toAccount,
                amount: Number(amount)
            };

            console.log("Transfer Request:", transferRequest);

            try {

                const response = await axios.post(
                    'http://localhost:3333/api/transfers/mq',
                    transferRequest
                );

                console.log(response.data);

                setMessage(response.data);

                setFromAccount('');
                setToAccount('');
                setAmount('');

            } catch (error) {

                console.error(error);

                if (error.response) {
                    setMessage(error.response.data);
                } else {
                    setMessage('Transfer Failed');
                }
            }
        }
    }

    function validateForm() {

        let valid = true;

        const errorsCopy = {
            fromAccount: '',
            toAccount: '',
            amount: ''
        };

        if (fromAccount.trim()) {
            errorsCopy.fromAccount = '';
        } else {
            errorsCopy.fromAccount = 'From Account is required';
            valid = false;
        }

        if (toAccount.trim()) {
            errorsCopy.toAccount = '';
        } else {
            errorsCopy.toAccount = 'To Account is required';
            valid = false;
        }

        if (amount && Number(amount) > 0) {
            errorsCopy.amount = '';
        } else {
            errorsCopy.amount = 'Amount must be greater than zero';
            valid = false;
        }

        setErrors(errorsCopy);

        return valid;
    }

    return (
        <div className='container'>
            <br />
            <br />

            <div className='row'>
                <div className='card col-md-6 offset-md-3'>

                    <h2 className='text-center mt-3'>
                        Fund Transfer
                    </h2>

                    <div className='card-body'>

                        <form>

                            <div className='form-group mb-3'>
                                <label className='form-label'>
                                    From Account
                                </label>

                                <input
                                    type='text'
                                    placeholder='Enter From Account'
                                    name='fromAccount'
                                    value={fromAccount}
                                    className={`form-control ${errors.fromAccount ? 'is-invalid' : ''}`}
                                    onChange={(e) => setFromAccount(e.target.value)}
                                />

                                {errors.fromAccount &&
                                    <div className='invalid-feedback'>
                                        {errors.fromAccount}
                                    </div>
                                }
                            </div>

                            <div className='form-group mb-3'>
                                <label className='form-label'>
                                    To Account
                                </label>

                                <input
                                    type='text'
                                    placeholder='Enter To Account'
                                    name='toAccount'
                                    value={toAccount}
                                    className={`form-control ${errors.toAccount ? 'is-invalid' : ''}`}
                                    onChange={(e) => setToAccount(e.target.value)}
                                />

                                {errors.toAccount &&
                                    <div className='invalid-feedback'>
                                        {errors.toAccount}
                                    </div>
                                }
                            </div>

                            <div className='form-group mb-3'>
                                <label className='form-label'>
                                    Amount
                                </label>

                                <input
                                    type='number'
                                    placeholder='Enter Amount'
                                    name='amount'
                                    value={amount}
                                    className={`form-control ${errors.amount ? 'is-invalid' : ''}`}
                                    onChange={(e) => setAmount(e.target.value)}
                                />

                                {errors.amount &&
                                    <div className='invalid-feedback'>
                                        {errors.amount}
                                    </div>
                                }
                            </div>

                            <button
                                type='button'
                                className='btn btn-success'
                                onClick={transferMoney}
                            >
                                Transfer
                            </button>

                        </form>

                        <hr />

                        {/* <h6>Debug Data</h6>

                        <pre>
                            {JSON.stringify(
                                {
                                    fromAccount,
                                    toAccount,
                                    amount
                                },
                                null,
                                2
                            )}
                        </pre> */}

                        {message &&
                            <div className='alert alert-info mt-3'>
                                {message}
                            </div>
                        }

                    </div>

                </div>
            </div>
        </div>
    );
};

export default FundTransferComponent;