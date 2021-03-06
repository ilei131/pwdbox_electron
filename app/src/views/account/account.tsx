import React from 'react'
import { shell } from 'electron'

import './account.less'

const Account: React.FC<PageProps> = () => {
    return (
        <div className="about flex column center" style={{ height: '100%' }}>
            <img src={$tools.APP_ICON} width="88" />
            <h2 style={{ marginTop: 8 }}>{$tools.APP_TITLE}</h2>
            <p className="fs-12 text-gray" style={{ margin: 4 }}>
                {$tools.APP_NAME} Version {$tools.APP_VERSION}
            </p>
            <p className="fs-12 text-gray">
                Copyright © {new Date().getFullYear()}{' '}
                <a
                    onClick={() => {
                        shell.openExternal('https://openwit.net')
                    }}
                >
                    openwit.
                </a>{' '}
                All rights
            </p>
        </div>
    )
}

export default Account
