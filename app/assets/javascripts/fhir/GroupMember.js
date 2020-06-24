const mongoose = require('mongoose/browser');
const { BackboneElementSchema } = require('./BackboneElement');
const { PeriodSchema } = require('./Period');
const { ReferenceSchema } = require('./Reference');
const { BackboneElementSchemaFunction } = require('./BackboneElement');

const [Schema] = [mongoose.Schema];

const [Number, String, Boolean] = [
  mongoose.Schema.Types.Number,
  mongoose.Schema.Types.String,
  mongoose.Schema.Types.Boolean,
];

const GroupMemberSchema = BackboneElementSchemaFunction({
   entity : ReferenceSchema,
   period : PeriodSchema,
   inactive : Boolean,
   fhirTitle: { type: String, default: 'GroupMember' },
});

class GroupMember extends mongoose.Document {
  constructor(object) {
    super(object, GroupMemberSchema);
    this._type = 'FHIR::GroupMember';
  }
};


module.exports.GroupMemberSchema = GroupMemberSchema;
module.exports.GroupMember = GroupMember;
