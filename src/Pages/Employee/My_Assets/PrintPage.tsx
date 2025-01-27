
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";


const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  companyLogo: {
    width: 100,
    height: 50,
    marginBottom: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    display: "flex",
    width: "auto",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderStyle: "solid",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 5,
    flex: 1,
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
  },
});
type Prop = {
     assetData: {
    assetId: string;
    assetName: string;
    assetStatus: string;
    assetType: string;
    companyName: string;
    company_logo: string;
    notes: string;
    requestDate: string;
    requesterBirth: string;
    requesterEmail: string;
    requesterName: string;
    requesterRole: string;
    status: string;
    updateDate: string;
  };
}
export const PrintPage = ({assetData}:Prop) => {
  return (
   <Document>
    <Page style={styles.page}>
      {/* Company Information */}
      <View style={styles.header}>
        <Image src={assetData.company_logo} style={styles.companyLogo} />
        <Text style={styles.title}>{assetData.companyName}</Text>
      </View>

      {/* Asset Details */}
      <View>
        <View style={styles.table}>
          {Object.entries(assetData).map(([key, value]) => (
            <View style={styles.row} key={key}>
              <Text style={styles.cell}>{key}</Text>
              <Text style={styles.cell}>{value}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Footer */}
      <Text style={styles.footer}>
        Printed on: {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>

  )
}
