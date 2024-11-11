// ===================Exercise 1====================
// import React from 'react';
// import { Text, View } from 'react-native';
//
// const Exercise1 = () => {
//   return (
//       <View style={{ marginTop: 50, margin: 20 }}>
//         <Text style={{ fontSize: 24 }}>
//           RP Values
//         </Text>
//         <Text style={{ color: 'green' }}>
//           Excellence
//         </Text>
//         <Text style={{ backgroundColor: 'yellow' }}>
//           Customer-Centric
//         </Text>
//         <Text style={{ fontStyle: 'italic' }}>
//           Integrity
//         </Text>
//         <Text style={{ textAlign: 'center' }}>
//           Teamwork
//         </Text>
//         <Text style={{ backgroundColor: 'black', color: 'white' }}>
//           Enterprising
//         </Text>
//       </View>
//   );
// }
// export default Exercise1;

// ===================Exercise 2====================
// import React from 'react';
// import { Text, View , StyleSheet} from 'react-native';
//
// const styles = StyleSheet.create({
//   greenBox: {
//     width: 100,
//     height: 100,
//     marginTop: 30,
//     backgroundColor: 'green',
//     borderWidth: 1,
//     borderColor: 'black',
//   },
//   boxText: {
//     textAlign: 'center',
//     color: 'white',
//   },
//   title: {
//     fontWeight: 'bold',
//   }
// })
//
//
// const Exercise2 = () => {
//   return(
//       <View style={{ marginTop: 50, margin: 20 }}>
//         <View style={styles.greenBox}>
//           <Text style={[styles.boxText, styles.title]}>Who We Are</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our People</Text>
//         </View>
//         <View style={styles.greenBox}>
//           <Text style={styles.boxText}>Our Campus</Text>
//         </View>
//       </View>
//   )
// }
// export default Exercise2;

// ===================Exercise 3A====================
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
//   powderblue: {
//     backgroundColor: 'powderblue',
//   },
//   skyblue: {
//     backgroundColor: 'skyblue',
//   },
//   steelblue: {
//     backgroundColor: 'steelblue',
//   },
// });
//
// const Exercise3a = () => {
//   return (
//       <View style={{ marginTop: 50, margin: 20 }}>
//         <View style={styles.Parent}>
//           <View style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//             <Text style={{ color: 'white' }}>Child One</Text>
//           </View>
//           <View style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//             <Text style={{ color: 'white' }}>Child Two</Text>
//           </View>
//           <View style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//             <Text style={{ color: 'white' }}>Child Three</Text>
//           </View>
//         </View>
//       </View>
//   );
// }
// export default Exercise3a;

// ===================Exercise 3B====================
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Exercise3b = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:50}]}>
//         <View style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//           <Text style={{ color: 'white' }}>Child One</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//           <Text style={{ color: 'white' }}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//           <Text style={{ color: 'white' }}>Child Three</Text>
//         </View>
//       </View>
//   );
// }
// export default Exercise3b;

// // ===================Exercise 3C====================
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     flexDirection: 'column',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     flex: 1,
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Exercise3c = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:50}]}>
//         <View style={[styles.Child, {backgroundColor: 'powderblue', maxWidth: 90}]}>
//           <Text style={{ color: 'white' }}>Child One</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//           <Text style={{ color: 'white' }}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'steelblue', maxHeight: 120}]}>
//           <Text style={{ color: 'white' }}>Child Three</Text>
//         </View>
//       </View>
//   );
// }
// export default Exercise3c;

// ===================Exercise 3D====================
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex:1,
//     flexDirection: 'row',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Exercise3d = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:50}]}>
//         <View style={[styles.Child, {backgroundColor: 'powderblue', flex:1}]}>
//           <Text style={{ color: 'white' }}>Child One</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'skyblue', flex:2}]}>
//           <Text style={{ color: 'white' }}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'steelblue', flex:3}]}>
//           <Text style={{ color: 'white' }}>Child Three</Text>
//         </View>
//       </View>
//   );
// }
// export default Exercise3d;

// ===================Exercise 3E====================
// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';
//
// const styles = StyleSheet.create({
//   Parent: {
//     flex: 1,
//     // flexDirection: 'column',
//     // justifyContent: 'flex-start',
//     // justifyContent: 'flex-end',
//     // justifyContent: 'space-around',
//     justifyContent: 'space-between',
//     backgroundColor: '#F5fcff',
//     borderColor: '#0099AA',
//     borderWidth: 5,
//   },
//   Child: {
//     borderWidth: 2,
//     textAlign: 'center',
//     fontSize: 28,
//   },
// });
//
// const Exercise3e = () => {
//   return (
//       <View style={[styles.Parent,{marginTop:50}]}>
//         <View style={[styles.Child, {backgroundColor: 'powderblue'}]}>
//           <Text style={{ color: 'white' }}>Child One</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'skyblue'}]}>
//           <Text style={{ color: 'white' }}>Child Two</Text>
//         </View>
//         <View style={[styles.Child, {backgroundColor: 'steelblue'}]}>
//           <Text style={{ color: 'white' }}>Child Three</Text>
//         </View>
//       </View>
//   );
// }
// export default Exercise3e;


// ===================Exercise 4====================
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    Parent: {
        flex: 1,
        backgroundColor: 'whitesmoke',
        marginTop: 50,
        justifyContent: 'space-around', // Centers children vertically
        alignItems: 'center',     // Centers children horizontally
        flexDirection: 'row',     // Arranges children horizontally in a row
    },
    Child: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,     // Adds spacing between the squares
    },
});

const Exercise4 = () => {
    return (
        <View style={styles.Parent}>
            <View style={[styles.Child, { backgroundColor: 'blue' }]}>
                <Text>Square 1</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'green' }]}>
                <Text>Square 2</Text>
            </View>
            <View style={[styles.Child, { backgroundColor: 'red' }]}>
                <Text>Square 3</Text>
            </View>
        </View>
    );
}

export default Exercise4;

