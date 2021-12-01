import React from "react";
import { Grid, Box } from "@mui/material";
import homeVideo from "../../assets/AGBackground.mp4";

import "./HomeScreen.css";

export const HomeScreen = () => {

  return (
    <div className="container">
        {/* <video muted autoPlay>
          <source src={homeVideo} type="video/mp4"></source>
        </video>
      <div>
        <h1>Hey</h1> */}
        {/* <Box sx={{ width: "100%" }}>
          <Grid container className="home-grid" spacing={2} columns={{ xs: 6 }}>
            <Grid item xs={6}>
              <p style={{  color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tristique libero sem, eget vehicula quam feugiat facilisis.
                Proin consequat nunc aliquam nunc vehicula, ultrices tincidunt
                lacus vestibulum. Nullam eget leo maximus, hendrerit ipsum eget,
                varius eros. Phasellus pulvinar magna eget metus viverra, nec
                mattis odio molestie. Fusce iaculis massa non velit vestibulum,
                nec iaculis purus tempor. Praesent tempor neque eget ante
                ultrices posuere. Praesent bibendum lacinia dui id ultricies.
                Quisque eu mi at elit condimentum vestibulum. Morbi mi tellus,
                dictum at velit quis, scelerisque sollicitudin leo. Integer
                porta sed nisi vel pharetra. Maecenas faucibus scelerisque
                condimentum. Donec mattis risus sed risus faucibus mattis. Duis
                placerat ullamcorper purus, a efficitur velit pellentesque ac.
                Mauris euismod condimentum tincidunt. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Morbi tincidunt risus sit
                amet velit lacinia porttitor. Sed tincidunt condimentum dolor
                vel lacinia. Curabitur aliquet bibendum arcu, eget pharetra
                libero tincidunt nec. In hac habitasse platea dictumst.
                Pellentesque mollis ipsum quis enim faucibus efficitur. Integer
                tempor vitae ante non vestibulum. Aenean nunc lectus, sagittis a
                ex non, hendrerit vehicula lorem. Proin est augue, malesuada in
                ullamcorper vel, auctor eget sapien. Donec sed interdum turpis,
                nec bibendum orci. Maecenas et elit a lectus tempus elementum
                vel ac enim. Aliquam molestie metus eros, viverra tristique
                magna fringilla in. Praesent quis interdum nisl, ac accumsan
                augue. Curabitur cursus felis ut vestibulum maximus. Integer vel
                odio rutrum, finibus ex laoreet, iaculis tortor. Mauris euismod
                condimentum tincidunt. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi tincidunt risus sit amet velit lacinia
                porttitor. Sed tincidunt condimentum dolor vel lacinia.
                Curabitur aliquet bibendum arcu, eget pharetra libero tincidunt
                nec. In hac habitasse platea dictumst. Pellentesque mollis ipsum
                quis enim faucibus efficitur. Integer tempor vitae ante non
                vestibulum. Aenean nunc lectus, sagittis a ex non, hendrerit
                vehicula lorem. Proin est augue, malesuada in ullamcorper vel,
                auctor eget sapien. Donec sed interdum turpis, nec bibendum
                orci. Maecenas et elit a lectus tempus elementum vel ac enim.
                Aliquam molestie metus eros, viverra tristique magna fringilla
                in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                finibus ex laoreet, iaculis tortor.
              </p>
            </Grid>
            <Grid item xs={6}>
              <p style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                tristique libero sem, eget vehicula quam feugiat facilisis.
                Proin consequat nunc aliquam nunc vehicula, ultrices tincidunt
                lacus vestibulum. Nullam eget leo maximus, hendrerit ipsum eget,
                varius eros. Phasellus pulvinar magna eget metus viverra, nec
                mattis odio molestie. Fusce iaculis massa non velit vestibulum,
                nec iaculis purus tempor. Praesent tempor neque eget ante
                ultrices posuere. Praesent bibendum lacinia dui id ultricies.
                Quisque eu mi at elit condimentum vestibulum. Morbi mi tellus,
                dictum at velit quis, scelerisque sollicitudin leo. Integer
                porta sed nisi vel pharetra. Maecenas faucibus scelerisque
                condimentum. Donec mattis risus sed risus faucibus mattis. Duis
                placerat ullamcorper purus, a efficitur velit pellentesque ac.
                Mauris euismod condimentum tincidunt. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Morbi tincidunt risus sit
                amet velit lacinia porttitor. Sed tincidunt condimentum dolor
                vel lacinia. Curabitur aliquet bibendum arcu, eget pharetra
                libero tincidunt nec. In hac habitasse platea dictumst.
                Pellentesque mollis ipsum quis enim faucibus efficitur. Integer
                tempor vitae ante non vestibulum. Aenean nunc lectus, sagittis a
                ex non, hendrerit vehicula lorem. Proin est augue, malesuada in
                ullamcorper vel, auctor eget sapien. Donec sed interdum turpis,
                nec bibendum orci. Maecenas et elit a lectus tempus elementum
                vel ac enim. Aliquam molestie metus eros, viverra tristique
                magna fringilla in. Praesent quis interdum nisl, ac accumsan
                augue. Curabitur cursus felis ut vestibulum maximus. Integer vel
                odio rutrum, finibus ex laoreet, iaculis tortor. Mauris euismod
                condimentum tincidunt. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi tincidunt risus sit amet velit lacinia
                porttitor. Sed tincidunt condimentum dolor vel lacinia.
                Curabitur aliquet bibendum arcu, eget pharetra libero tincidunt
                nec. In hac habitasse platea dictumst. Pellentesque mollis ipsum
                quis enim faucibus efficitur. Integer tempor vitae ante non
                vestibulum. Aenean nunc lectus, sagittis a ex non, hendrerit
                vehicula lorem. Proin est augue, malesuada in ullamcorper vel,
                auctor eget sapien. Donec sed interdum turpis, nec bibendum
                orci. Maecenas et elit a lectus tempus elementum vel ac enim.
                Aliquam molestie metus eros, viverra tristique magna fringilla
                in. Praesent quis interdum nisl, ac accumsan augue. Curabitur
                cursus felis ut vestibulum maximus. Integer vel odio rutrum,
                finibus ex laoreet, iaculis tortor.
              </p>
            </Grid>
          </Grid>
        </Box> */}
      {/* </div> */}
    </div>
  );
};
