import { Text, View, StyleSheet, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ModalType } from "@/types/enums";
import * as WebBrowser from "expo-web-browser";
import {BottomSheetModal,BottomSheetModalProvider,BottomSheetBackdrop} from '@gorhom/bottom-sheet'
import { useActionSheet } from "@expo/react-native-action-sheet";
export default function Index() {
  const { top } = useSafeAreaInsets();
  const { showActionSheetWithOptions } = useActionSheet();

  const openLink = () => {
    WebBrowser.openBrowserAsync("https://www.zajjajbinsana.com");
  };
  const showModal = (type: ModalType) => {};
  const openActionSheet = async () => {
    const options = ["View support docs", "Contact us", "Cancel"];
    const cancelButtonIndex = 2;
    showActionSheetWithOptions(
      { options, cancelButtonIndex, title: "Cannot sign up or login ? " },
      (selectedIndex: any) => {
        console.log(selectedIndex);
      }
    );
  };
  return (
    <BottomSheetModalProvider>
      <View style={[styles.container, { paddingTop: top + 30 }]}>
        <Image
          source={require("@/assets/images/login/trello.png")}
          style={styles.image}
        />
        <Text style={styles.introText}>Move team forword-even on the go</Text>
        <View style={styles.bottomContainer}>
          <TouchableOpacity
            style={[styles.btn, { backgroundColor: "#fff" }]}
            onPress={() => showModal(ModalType.SignUp)}
          >
            <Text style={[styles.btnText, { color: Colors.primary }]}>
              Login in
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => showModal(ModalType.SignUp)}
          >
            <Text style={[styles.btnText, { color: "#fff" }]}>Sign Up</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            By signing up, you agree to the{"        "}
            <Text style={styles.link} onPress={openLink}>
              User Notice
            </Text>
            {"  "}
            and{"  "}
            <Text style={styles.link} onPress={openLink}>
              Privacy Policy.
            </Text>
          </Text>
          <Text style={styles.link} onPress={openActionSheet}>
            Cant login or Signup?
          </Text>
        </View>
      </View>
    </BottomSheetModalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: "center",
  },
  image: {
    height: 450,
    paddingHorizontal: 40,
    resizeMode: "contain",
  },
  introText: {
    fontWeight: "600",
    color: "white",
    fontSize: 17,
    padding: 30,
  },
  bottomContainer: {
    gap: 10,
    width: "100%",
    paddingHorizontal: 40,
  },
  btn: {
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
  btnText: {
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: "white",
    marginHorizontal: 60,
  },
  link: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});
