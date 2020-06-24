const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StrandTypeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StrandType' },
});

class StrandType extends mongoose.Document {
  constructor(object) {
    super(object, StrandTypeSchema);
    this._type = 'FHIR::StrandType';
  }
};


module.exports.StrandTypeSchema = StrandTypeSchema;
module.exports.StrandType = StrandType;
