
import React from 'react'
import store from './store';

export function connect(InputComponent, callback) {


    class Container extends React.Component {
        constructor() {
            super();
            let o = callback(store.getState())
            this.state = { ...o }
        }
        componentDidMount() {

        }
        componentWillUnmount() {

        }
        commonLogic() {

        }
        render() {
            return (
                <div>
                    <InputComponent {...this.state} />
                </div>
            )
        }
    }

    Container.displayName = `connect<${InputComponent.name}>`

    return Container;

}