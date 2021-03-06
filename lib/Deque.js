'use strict'

const DoublyLinkedList = require('./DoublyLinkedList')
const DequeIterator = require('./DequeIterator')
/**
 * DoublyLinkedList backed double ended queue
 * implements just enough to keep the Pool
 */
class Deque {
  constructor () {
    this._list = new DoublyLinkedList()
  }

  /**
   * removes and returns the first element from the queue
   * @return {[type]} [description]
   */
  shift () {
    if (this._length === 0) {
      return undefined
    }

    const node = this._list.head
    this._list.remove(node)

    return node.data
  }

  /**
   * adds one elemts to the beginning of the queue
   * @param  {[type]} element [description]
   * @return {[type]}         [description]
   */
  unshift (element) {
    const node = DoublyLinkedList.createNode(element)

    this._list.insertBeginning(node)
  }

  /**
   * adds one to the end of the queue
   * @param  {[type]} element [description]
   * @return {[type]}         [description]
   */
  push (element) {
    const node = DoublyLinkedList.createNode(element)

    this._list.insertEnd(node)
  }

  /**
   * removes and returns the last element from the queue
   */
  pop () {
    if (this._length === 0) {
      return undefined
    }

    const node = this._list.tail
    this._list.remove(node)

    return node.data
  }

  [Symbol.iterator] () {
    return new DequeIterator(this._list)
  }

  iterator () {
    return new DequeIterator(this._list)
  }

  reverseIterator () {
    return new DequeIterator(this._list, true)
  }

  /**
   * get a reference to the item at the head of the queue
   * @return {element} [description]
   */
  get head () {
    if (this._list.length === 0) {
      return undefined
    }
    const node = this._list.head
    return node.data
  }

  /**
   * get a reference to the item at the tail of the queue
   * @return {element} [description]
   */
  get tail () {
    if (this._list.length === 0) {
      return undefined
    }
    const node = this._list.tail
    return node.data
  }

  get length () {
    return this._list.length
  }
}

module.exports = Deque
