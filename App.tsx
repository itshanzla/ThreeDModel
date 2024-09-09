import {StyleSheet, Text, View} from 'react-native';
import React, {Suspense} from 'react';
import {Canvas} from '@react-three/fiber';
import Sofa from './src/model/Sofa';
import useControls from 'r3f-native-orbitcontrols';
import {OrbitControls} from '@react-three/drei';
import { DirectionalLight } from 'three';
const App = () => {
  const [orbitcontrols, events] = useControls();
  return (
    <View style={{flex: 1}}>
      <View style={{alignSelf:'center',marginTop:20}}>
        <Text style={{color:'#e83351', fontSize:24}}>My First 3d Model</Text>
      </View>
      <Canvas>
        <OrbitControls enablePan={true}></OrbitControls>
      <directionalLight position={[0.5,1,0.5]} args={['#e83351',2]}/>
        <Suspense fallback={null}>
          <Sofa />
        </Suspense>
      </Canvas>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
