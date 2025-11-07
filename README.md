# Mogcia - Interactive Portfolio

Next.js ベースのインタラクティブなポートフォリオサイトです。

## 特徴

- 🎬 **スクロール連動アニメーション** - スクロールに合わせて要素がアニメーション
- 🎥 **動画スクロール同期** - スクロール位置に合わせて動画の位置が変わる
- 🎠 **自動スライドショー** - ヒーローセクションで自動スライド
- 📱 **レスポンシブデザイン** - モバイルからデスクトップまで対応
- 🎨 **モダンなデザイン** - Tailwind CSS + Framer Motion

## セットアップ

```bash
# 依存関係のインストール
npm install

# 開発サーバーを起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## 動画の追加方法

`app/page.tsx` の以下の行を編集して、あなたの動画に差し替えてください：

```tsx
<source src="あなたの動画のURL" type="video/mp4" />
```

または、`public` フォルダに動画ファイルを配置して：

```tsx
<source src="/videos/your-video.mp4" type="video/mp4" />
```

## カスタマイズ

- **スライド**: `app/page.tsx` の `slides` 配列を編集
- **色**: `tailwind.config.ts` でテーマカラーを変更
- **レイアウト**: 各セクションを調整して独自のデザインに

## 技術スタック

- Next.js 14
- React 18
- Framer Motion (アニメーション)
- Tailwind CSS (スタイリング)
- TypeScript

## ライセンス

MIT

