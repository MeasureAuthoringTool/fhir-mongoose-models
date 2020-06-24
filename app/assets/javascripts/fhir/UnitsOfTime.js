const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const UnitsOfTimeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'UnitsOfTime' },
});

class UnitsOfTime extends mongoose.Document {
  constructor(object) {
    super(object, UnitsOfTimeSchema);
    this._type = 'FHIR::UnitsOfTime';
  }
};


module.exports.UnitsOfTimeSchema = UnitsOfTimeSchema;
module.exports.UnitsOfTime = UnitsOfTime;
