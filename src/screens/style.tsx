import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderColor: "#555",
    borderWidth: 2,
    backgroundColor: "#222",
    color: "#fff",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  containerSibling: {
    width: "100%",
    alignItems: "center",
    borderColor: "#333",
    borderWidth: 2,
    padding: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  item: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  buttonContainer: {
    flex: 1,
    margin: 5,
  },
  submitButtonContainer: {
    width: "100%",
    marginTop: 20,
    padding: 10,
    backgroundColor: "#0275d8",
    borderRadius: 5,
  },
  h1: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 10,
    marginBottom: 20,
    textAlign: "center",
    width: "100%",
    borderRadius: 5,
  },
  historyItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#1e1e1e",
    borderRadius: 5,
  },
  historyIndex: {
    color: "#ff6347",
    fontSize: 16,
    marginRight: 10,
  },
  historyText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginRight: 10,
  },
});

export { styles };
