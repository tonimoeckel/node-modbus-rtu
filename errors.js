module.exports = {
    ModbusCrcError,
    ModbusAborted,
    ModbusRetryLimitExceed,
    ModbusResponseTimeout,
};

function ModbusCrcError() {
    this.message = 'Received Modbus response get invalid CRC';
    this.name = 'ModbusCrcError';
    Error.captureStackTrace(this, ModbusCrcError);
}

ModbusCrcError.prototype = Object.create(Error.prototype);
ModbusCrcError.prototype.constructor = ModbusCrcError;

function ModbusAborted() {
    this.message = 'Aborted';
    this.name = 'ModbusAborted';
    Error.captureStackTrace(this, ModbusAborted);
}

ModbusAborted.prototype = Object.create(Error.prototype);
ModbusAborted.prototype.constructor = ModbusAborted;

function ModbusRetryLimitExceed(add) {
    this.message = 'Retry limit exceed ' + add;
    this.name = 'ModbusRetryLimitExceed';
    Error.captureStackTrace(this, ModbusRetryLimitExceed);
}

ModbusRetryLimitExceed.prototype = Object.create(Error.prototype);
ModbusRetryLimitExceed.prototype.constructor = ModbusRetryLimitExceed;

function ModbusResponseTimeout(time) {
    this.message = `Response timeout ${time}ms exceed!`;
    this.name = 'ModbusResponseTimeout';
    Error.captureStackTrace(this, ModbusResponseTimeout);
}

ModbusResponseTimeout.prototype = Object.create(Error.prototype);
ModbusResponseTimeout.prototype.constructor = ModbusResponseTimeout;