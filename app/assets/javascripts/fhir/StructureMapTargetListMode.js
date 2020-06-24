const mongoose = require('mongoose/browser');
const { ElementSchema } = require('./Element');
const { ElementSchemaFunction } = require('./Element');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const StructureMapTargetListModeSchema = ElementSchemaFunction({
   value : String,
   fhirTitle: { type: String, default: 'StructureMapTargetListMode' },
});

class StructureMapTargetListMode extends mongoose.Document {
  constructor(object) {
    super(object, StructureMapTargetListModeSchema);
    this._type = 'FHIR::StructureMapTargetListMode';
  }
};


module.exports.StructureMapTargetListModeSchema = StructureMapTargetListModeSchema;
module.exports.StructureMapTargetListMode = StructureMapTargetListMode;
