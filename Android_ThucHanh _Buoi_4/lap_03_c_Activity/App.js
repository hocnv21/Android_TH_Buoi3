import React from "react";
import { Rating, AirbnbRating } from "react-native-ratings";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Modal,
  Pressable,
  Alert,
} from "react-native";
import { Stack, HStack, VStack, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useState } from "react";

export default function App() {
  const phone = {
    blue: require("./assets/vs_xanh.png"),
    while: require("./assets/vs_bac.png"),
    red: require("./assets/vs_red.png"),
    back: require("./assets/vs_black.png"),
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [color_phone, setColor_phone] = useState("xanh");
  const [linkImage, setLinkImage] = useState(phone.blue);

  var color_vsmphone = color_phone;
  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        {/* View Modal */}
        <View style={styles.modalView}>
          {/* view detailed info */}
          <View
            style={{
              flex: 1,
              backgroundColor: "#ffff",
              width: "100%",
              height: "100%",

              flexDirection: "row",
            }}
          >
            <View style={{ flex: 1, margin: 15 }}>
              <Image
                style={{ width: 112, height: 136 }}
                source={linkImage}
              ></Image>
            </View>
            <View style={{ flex: 2, margin: 20 }}>
              <Stack spacing={7}>
                <Text style={{}}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                <Text>
                  Màu: <Text style={styles.textBold}>{color_vsmphone}</Text>{" "}
                </Text>
                <Text>
                  Cung cấp bởi{" "}
                  <Text style={styles.textBold}>Tiki Tradding</Text>
                </Text>
                <Text style={styles.textBold}>1.790.000 đ</Text>
              </Stack>
            </View>
          </View>
          {/* View color option */}
          <View
            style={{
              flex: 3.5,
              width: "100%",
              backgroundColor: "#C4C4C4",
              padding: 10,
            }}
          >
            <Text style={{ marginLeft: 25, size: 18 }}>
              Chọn một màu bên dưới:
            </Text>

            <Stack center m={15} spacing={20}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: 85,
                  height: 80,
                  backgroundColor: "#C5F1FB",
                }}
                onPress={() =>
                  setColor_phone("bạc") || setLinkImage(phone.while)
                }
              ></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: 85,
                  height: 80,
                  backgroundColor: "#F30D0D",
                }}
                onPress={() => setColor_phone("đỏ") || setLinkImage(phone.red)}
              ></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: 85,
                  height: 80,
                  backgroundColor: "#000000",
                }}
                onPress={() =>
                  setColor_phone("đen") || setLinkImage(phone.back)
                }
              ></TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  width: 85,
                  height: 80,
                  backgroundColor: "#234896",
                }}
                onPress={() =>
                  setColor_phone("xanh") || setLinkImage(phone.blue)
                }
              ></TouchableOpacity>
            </Stack>
          </View>
          <View
            style={{
              flex: 0.7,
              width: "100%",

              backgroundColor: "#C4C4C4",
            }}
          >
            <View style={{ flex: 1, margin: 15, justifyContent: "center" }}>
              <TouchableOpacity
                activeOpacity={0.6}
                style={{
                  borderRadius: 10,
                  backgroundColor: "rgba(25, 82, 226, 0.58)",
                }}
              >
                <Text
                  style={{
                    color: "#FFF",
                    textAlign: "center",
                    margin: 15,
                    fontSize: 20,
                  }}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  XONG
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* View image phone  */}
      <View style={{ flex: 1, margin: 20, width: "100%" }}>
        <Image source={linkImage} style={styles.styleImage}></Image>
      </View>

      <View style={{ flex: 1, width: "100%" }}>
        {/* View the detailed phone info */}
        <View style={{ flex: 2, paddingHorizontal: 10 }}>
          <View style={{ flex: 1 }}>
            <View style={{ flex: 4 }}>
              <VStack spacing={15}>
                <Text>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <HStack>
                  <View style={{ flex: 1, alignItems: "flex-start" }}>
                    <Rating imageSize={20} style={{ paddingVertical: 5 }} />
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text>(Xem 828 đánh giá) </Text>
                  </View>
                </HStack>

                <HStack spacing={1}>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.textBold}> 1.790.000 đ</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text
                      style={{
                        color: "gray",
                        textDecorationLine: "line-through",
                      }}
                    >
                      1.790.000 đ
                    </Text>
                  </View>
                </HStack>

                <HStack alignItems="center">
                  <Text style={{ fontWeight: "bold", color: "red" }}>
                    Ở ĐÂU RẺ HƠN HOÀN TIỀN
                  </Text>
                  <IconButton
                    icon={(props) => (
                      <Icon name="help-circle-outline" {...props} />
                    )}
                  />
                </HStack>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={{
                    borderRadius: 10,
                    borderWidth: 1,
                    backgroundColor: "#fff",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={() => setModalVisible(true)}
                >
                  <Text
                    style={{
                      color: "#000",
                      textAlign: "center",
                      flex: 1,
                      margin: 8,
                      fontSize: 15,
                    }}
                  >
                    4 MÀU - CHỌN MÀU
                  </Text>
                  <Icon name="chevron-right" size={40} />
                </TouchableOpacity>
              </VStack>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", margin: 10 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              borderRadius: 10,
              backgroundColor: "red",
            }}
          >
            <Text
              style={{
                color: "#FFF",
                textAlign: "center",
                margin: 15,
                fontSize: 20,
              }}
            >
              CHỌN MUA
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
  modalView: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  styleImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "contain",
    // height:300,
  },
  styleText: {
    color: "red",
  },
  textBold: {
    fontWeight: "bold",
  },
});
