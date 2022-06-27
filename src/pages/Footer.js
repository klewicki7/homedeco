import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import mercadoPagoLogo from "../assets/images/logos/tarjetas/mercadopago.png";
import americanExpressLogo from "../assets/images/logos/tarjetas/americanexpress.png";
import visaLogo from "../assets/images/logos/tarjetas/visa.png";
import mastercardLogo from "../assets/images/logos/tarjetas/mastercard.png";
import { Image } from "react-bootstrap";
import logo from "../image.jpg";
import { Colors } from "../settings";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function Footer() {
  return (
    <Box
      sx={{ flexGrow: 1, marginTop: 10, maxHeight: "30%", minHeigth: "20%" }}
    >
      <Grid backgroundColor={Colors.backgroundColor} container spacing={2}>
        <Grid spacing={1} direction="column" xs={6} style={{ marginTop: 15 }}>
          <Image
            src={logo}
            style={{ width: 100 }}
            rounded={100}
            roundedCircle
          />
        </Grid>
        <Grid item xs={6}>
          <div>
            <h1 style={{color:Colors.generalLetters}}>Contacto</h1>
          </div>
          <div>
            <Link href="#" underline="hover">
              <h5 style={{color:Colors.generalLetters}}>
                <PhoneCallbackIcon /> Venta Telefónica 0800-220-0010
              </h5>
            </Link>
          </div>
          <div>
            <Link href="#" underline="hover">
              <h5 style={{color:Colors.generalLetters}}>
                <MarkEmailUnreadIcon /> Contáctenos
              </h5>
            </Link>
          </div>
          <div>
            <Link href="#" underline="hover">
              <h5 style={{color:Colors.generalLetters}}>
                <MarkUnreadChatAltIcon /> Chat
              </h5>
            </Link>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div>
            <Link href="/quienessomos" underline="hover">
              <h5 style={{color:Colors.generalLetters}}>Quiénes somos</h5>
            </Link>
          </div>
          <div>
            <Link href="/politicadeenvio" underline="hover">
            <h5 style={{color:Colors.generalLetters}}>Politicas de envío </h5>
            </Link>
          </div>
          <div>
            <Link href="/politicaretiroenlocal" underline="hover">
            <h5 style={{color:Colors.generalLetters}}>Políticas de retiro en tienda</h5>
            </Link>
          </div>
          <div>
            <Link href="/legal" underline="hover">
            <h5 style={{color:Colors.generalLetters}}>Legal</h5>
            </Link>
          </div>
          <div>
            <Link href="/ayuda" underline="hover">
            <h5 style={{color:Colors.generalLetters}}>Ayuda</h5>
            </Link>
          </div>
          <div>
            <Link href="/garantias" underline="hover">
            <h5 style={{color:Colors.generalLetters}}>Garantías</h5>
            </Link>
          </div>
        </Grid>
        <Grid xs={6} style={{marginTop:20}}>
          <div>
            <h1 style={{color:Colors.generalLetters}}>Metodos de pago</h1>
          </div>
          <Grid rowSpacing={3} direction={"row"}>
            <Image src={mercadoPagoLogo} style={{ height: 100, width: 200 }} />
            <Image src={mastercardLogo} style={{ height: 100, width: 200 }} />
            <Image src={visaLogo} style={{ height: 100, width: 200 }} />
            <Image
              src={americanExpressLogo}
              style={{ height: 100, width: 200 }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
