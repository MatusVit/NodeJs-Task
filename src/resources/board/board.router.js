const router = require('express').Router();
const Board = require('./board.model');
const boardService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardService.get(req.params.id);
  res.json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );
  res.json(board);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardService.update({
    id: req.params.id,
    body: req.body
  });
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const ok = await boardService.deleteBoard(req.params.id);
  console.log('<<< delete board >>> = ', ok);
  if (ok) res.status(200).send('OK');
  else res.status(404).send('Not Found');
});

module.exports = router;
