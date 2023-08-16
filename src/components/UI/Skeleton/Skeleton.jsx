import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={481}
    viewBox="0 0 280 481"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="55" y="378" rx="3" ry="3" width="191" height="49" /> 
    <rect x="70" y="293" rx="3" ry="3" width="154" height="8" /> 
    <circle cx="145" cy="134" r="131" /> 
    <circle cx="546" cy="63" r="32" /> 
    <rect x="71" y="316" rx="0" ry="0" width="154" height="10" /> 
    <rect x="85" y="339" rx="0" ry="0" width="127" height="13" /> 
    <rect x="51" y="449" rx="0" ry="0" width="203" height="30" />
  </ContentLoader>
)

export default Skeleton