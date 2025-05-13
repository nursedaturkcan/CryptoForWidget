import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import Navbar from '../components/Navbar';
import { SafeAreaView } from 'react-native-safe-area-context';

type CryptoDetailRouteProp = RouteProp<RootStackParamList, 'CoinDetail'>;

const CoinDetailScreen: React.FC = () => {
  const route = useRoute<CryptoDetailRouteProp>();
  const { symbol } = route.params; 

  const tradingViewHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          html, body, #tv_chart_container {
            margin: 0;
            padding: 0;
            height: 100%;
            width: 100%;
            background-color: #000;
          }
        </style>
      </head>
      <body>
        <div id="tv_chart_container"></div>
        <script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
        <script type="text/javascript">
          new TradingView.widget({
            container_id: "tv_chart_container",
            autosize: true,
            symbol: "BINANCE:${symbol}",
            interval: "15",
            timezone: "Etc/UTC",
            theme: "Dark",
            style: "1",
            locale: "tr",
            toolbar_bg: "#1e1e1e",
            enable_publishing: false,
            hide_side_toolbar: false,
            allow_symbol_change: false,
            hide_legend: false,
            save_image: false,
            studies: [],
          });
        </script>
      </body>
    </html>
  `;

  return (
    <SafeAreaView style={styles.container}>
      <Navbar type="back" coinSymbol={symbol} />
      <WebView
        originWhitelist={['*']}
        source={{ html: tradingViewHTML }}
        style={styles.webview}
        startInLoadingState
        renderLoading={() => (
          <ActivityIndicator size="large" color="#fcd535" style={styles.loader} />
        )}
      />
    </SafeAreaView>
  );
};

export default CoinDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  webview: {
    flex: 1,
  },
  loader: {
    marginTop: 50,
  },
});
