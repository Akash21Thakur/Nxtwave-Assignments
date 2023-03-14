import { inject } from "mobx-react";

const HomePageContent = inject('homeVideosStore')((props: any) => {
    
    const {homeVideosStore} = props;
    console.log(homeVideosStore.homeVideosList);

    return <>
    <div>Home Page</div>
    </>
})

export default HomePageContent;

