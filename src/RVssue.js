import React from 'react';
import { VueInReact } from "vuera";
import { VssueComponent } from "vssue";
import 'vssue/dist/vssue.css'
import GithubV3 from '@vssue/api-github-v3';
const ReactVssue = VueInReact(VssueComponent);
const vssopts = {
    api: GithubV3,
    owner: "changtimwu",
    repo: "react-vssue-demo-app",
    clientId: "a152cc337f4ba233f783",
    clientSecret: "2d2f37d7d33ffc2833b232582c92e7542d2e737a",
    autoCreateIssue: true
}

export default (props) => <ReactVssue title={props.title} options={vssopts}/>

